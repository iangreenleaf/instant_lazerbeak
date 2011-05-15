task :build do
  sh "compass", "compile", "--sass-dir", "."
end

task :clean do
  rm Dir.glob( "stylesheets/*.css" )
end
