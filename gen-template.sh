date=$(date +'%Y-%m-%d')
postNum=24
echo "$postNum"
postNum=$((postNum + 1))
typeset -p postNum > ./gen-template.sh