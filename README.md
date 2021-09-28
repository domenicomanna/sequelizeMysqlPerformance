# Sequelize and MySQL/MariaDB Performance

### Steps to run the project locally:

1. Download the repo: `git clone https://github.com/domenicomanna/sequelizeMysqlPerformance.git sequelizeMysqlPerformance`
2. `cd sequelizeMysqlPerformance`
3. Install dependencies: `npm install`
4. Run the build script `npm run build`
5. Create a `.env` file at the root of the project and fill it in with your database connection details:
    ```
    MYSQL_DATABASE=
    MYSQL_DB_HOST=
    MYSQL_DB_USERNAME=
    MYSQL_DB_PASSWORD=
    ```

6. Start the app: `npm start`
7. After the app has started, the `Books` database table should have been created. Now, we will insert data in to the table using the provided `Books.csv` file in the `data` folder. To import, run the following command (make sure to substitute the
correct hostname, username, and the database name):
    `mysqlimport -h YOUR_HOST_NAME -u YOUR_USER_NAME -p --local --fields-terminated-by=',' --lines-terminated-by='\n' --fields-optionally-enclosed-by='"' YOUR_DATABASE_NAME ./data/Books.csv`

### Performance Testing:
After importing the test data, we can test the performance of the app.
1. Start the app if, it's not started already `npm start`
2. Open two terminals and in one terminal run: `watch -n 1 time curl http://localhost:3000/helloWorld --silent`, and in the other: `watch -n .5 time curl localhost:3000/longQueryWithSequelize --silent`. Keep this running for a bit of time and take note of the `real` time for the `helloWorld` request
3. Now, close the app, stop the `watch -n .5 time curl localhost:3000/longQueryWithSequelize --silent` command, **restart the server** and run: `watch -n .5 time curl localhost:3000/longQueryWithRawMysql --silent`. Again, keep this running for a bit of time and take note of the `real` time for the `helloWorld` request
4. Compare the two `real times`. When hitting the `longQueryWithSequelize` endpoint, the response time of the `helloWorld` endpoint should be significantly slower than when hitting the `longQueryWithRawMysql` endpoint
