# Blog search


 find . -type f -not -path '*/.*' | while read file; do
  echo "\n\n=================================="
  echo " FILE: $file "
  echo "=================================="
  cat "$file"
done | pbcopy
