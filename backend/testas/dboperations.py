import pymysql

#conn = pymysql.connect(host="localhost", user="root", passwd="", db="servicesdb")

#myCursor = conn.cursor()

#Pridėti lentelę:
#myCursor.execute("""CREATE TABLE service
# #  (
#       id int primary key,
#        name varchar(50),
#        description varchar(1000),
#        pricefrom decimal(6,2),
#        priceto decimal(6,2)
#    )
#    """)
#
#conn.commit()

#conn.close()

 #editint lentele
#myCursor.execute("""ALTER TABLE service ADD
#    (
#       description varchar(200)
#    )
#    """)

#pridėti elementą:
def create(id, name, description, price_From, price_To):
    conn = pymysql.connect(host="localhost", user="root", passwd="", db="servicesdb", cursorclass=pymysql.cursors.DictCursor)
    myCursor = conn.cursor()
    myCursor.execute('INSERT INTO service(id,title,description,price_From,price_To) VALUES(%s, \'%s\', \'%s\',\'%s\',\'%s\');' % \
       (id, name, description, price_From, price_To))
    #myCursor.execute("INSERT INTO service(id,name,description) VALUES(9,'123','464');")
    conn.commit()
    conn.close()
   #

#print('INSERT INTO service(id,name,description) VALUES(%s, \'%s\', \'%s\');' % (id, name, description))
#input('any key to continue')
#myCursor.execute("INSERT INTO service(id,name,description) VALUES(4,'vardenis','description');")

#ištrinti elementą pagal id
#myCursor.execute("DELETE FROM service WHERE id=1;")

#redaguoti element1 pagal id
#myCursor.execute("UPDATE service SET name='naujasVardas' WHERE id=4;")

#atvaizduoti listą elementų
def printall():
   conn = pymysql.connect(host="localhost", user="root", passwd="", db="servicesdb", cursorclass=pymysql.cursors.DictCursor)
   myCursor = conn.cursor()
   myCursor.execute("SELECT * FROM service;")
   print(myCursor.fetchall(), end="\n")
   return myCursor.fetchall()
   #input("Press any key to continue")



#conn.commit()

#conn.close()