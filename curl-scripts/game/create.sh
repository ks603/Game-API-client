curl --include --request POST "https://video-game-sei.herokuapp.com/games/" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "given_name": "'"${GIVENNAME}"'",
      "review": "'"${REVIEW}"'",
      "recommend": "'"${RECOMMEND}"'",
      "serial_number": "'"${SERIALNUMBER}"'"
    }
  }'

echo
