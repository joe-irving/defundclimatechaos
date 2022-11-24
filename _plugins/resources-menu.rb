module ResourceMenu
    class ResourceMenu < ::Jekyll::Generator
        priority :lowest
        def generate(site)
            
            tags = site.collections['resources'].docs.map {|r| r['tags']}.flatten.uniq.sort
            
            tags.each_with_index do |tag, index|
                slug = Jekyll::Utils.slugify(tag)
                url = "/resources##{slug}"
                
                menu_item = {
                    "url" => "/resources##{slug}",
                    "title" => tag,
                    "weight" => index
                }

                # site.data['menus']['resources'] = [] unless site.data['menus']['resources']
                # site.data['menus']['resources'] << menu_item
            end
        end
    end
end
