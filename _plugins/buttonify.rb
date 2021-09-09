module Jekyll
  class Buttonify < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
      puts tag_name
      puts text
      puts tokens
    end

    def render(context)

    end
  end
end

Liquid::Template.register_tag('button', Jekyll::Buttonify)
