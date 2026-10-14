require 'digest/md5'

module Jekyll
  module CacheBust
    def bust_file_cache(file_name)
      asset_path = file_name[file_name.index('assets/')..]
      contents = File.binread(File.join(site.source, asset_path))
      with_digest(file_name, contents)
    end

    def bust_css_cache(file_name)
      sass_directory = site.config.fetch('sass', {}).fetch('sass_dir', '_sass')
      source_files = [File.join(site.source, 'assets/css/main.scss')]
      source_files.concat(Dir[File.join(site.source, sass_directory, '**', '*.{scss,sass}')].sort)
      contents = source_files.map { |path| File.read(path) }.join
      # The entry point reads this Liquid value before Sass compiles.
      with_digest(file_name, contents + site.config['max_width'].to_s)
    end

    private

    def site
      @context.registers[:site]
    end

    def with_digest(file_name, contents)
      "#{file_name}?#{Digest::MD5.hexdigest(contents)}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)
