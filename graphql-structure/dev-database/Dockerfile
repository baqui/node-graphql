FROM mongo
COPY seed-data.json /seed-data.json
CMD mongoimport --host mongo --db test --collection Courses --type json --file /seed-data.json --jsonArray
