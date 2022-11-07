source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.2.0"

gem 'bigdecimal'
# gem 'activesupport'
gem "json"

gem "jekyll-get-json", "~> 1.0"

# Theme
gem 'jekyll-theme-chaos', git: "https://github.com/tippingpointuk/jekyll-theme-chaos"#, branch: "dcc-patches"

gem 'action_network_rest'

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-airtable-import', '~> 0.1.5'
  gem 'jekyll-liquify'
  gem 'jekyll-gdocfilter'
  gem 'jekyll-action-network'
end
# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
