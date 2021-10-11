require 'jekyll'

module CombineResources
  class Generator < ::Jekyll::Generator
    def generate(site)
      puts site.collections.key?("resources")
      if site.collections.key?("resources")
        if not site.data.key?("resources")
          site.data['resources'] = []
        end
        site.collections['resources'].docs.each do |r|
          site.data['resources'].append(r)
        end
      end
    end
  end
end
