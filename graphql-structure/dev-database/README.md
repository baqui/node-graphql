Additional container for seeding mongodb container

CMD mongoimport --host mongo --db test --collection Courses --type json --file /seed-data.json --jsonArray

Important -> --host mongo -> mongo is a name of the connection no mongodb

More information about mongoimport:
https://docs.mongodb.com/manual/reference/program/mongoimport/
