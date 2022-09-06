require 'jekyll'
require 'jekyll/page_without_a_file'
require 'net/http'
require 'json'


module StrikeMap
    class StrikeMap <  ::Jekyll::Generator
        def generate(site)
            uri = URI('https://strikemap.co.uk/api/search')
            strikemap_res = Net::HTTP.get_response(uri)
            if !strikemap_res.is_a?(Net::HTTPSuccess)
                puts strikemap_res
                return
            end
            strikemap = JSON.parse(strikemap_res.body)
            

            strikemap_file = Jekyll::PageWithoutAFile.new(site, "", "", "strikes.json")
            strikemap_file.content = strikemap_res.body
            # puts strikemap_file.to_yaml

            site.pages << strikemap_file
        end
    end
end
