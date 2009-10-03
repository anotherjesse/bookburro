task :default => [:xpi]

task :xpi do
  rm_f 'bookburro.xpi'
  puts `find chrome chrome.manifest modules install.rdf defaults | egrep -v '(#|~|DS_Store)' | xargs zip bookburro.xpi`
end

task :amo do
  puts "FIXME"
  exit
  rm_f 'bookburro-release.xpi'
  `rm -rf amo`
  `mkdir amo`
  `cp -r chrome chrome.manifest defaults components amo/`
  `cat install.rdf | sed 's/^.*updateURL.*$//' > amo/install.rdf`
  puts `cd amo && find . | egrep -v '(#|~|DS_Store)' | xargs zip ../bookburro-release.xpi`
end
