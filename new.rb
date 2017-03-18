# encoding: utf-8

now = Time.now.strftime '%Y%m%d%H%M'
title = ARGV.join('_').chomp.downcase
filename = "#{now}-#{title}.slim"
filename = './posts/' << filename

File.new filename, 'w'
