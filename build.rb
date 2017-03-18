require 'slim'
# require 'ostruct'
# require 'yaml'

# config = YAML.load_file 'config.yml'

layout = Slim::Template.new { File.read 'layout/main.slim' }
post = Slim::Template.new { File.read 'posts/201703181600-first_entry.slim' }
puts layout.render { post.render }
