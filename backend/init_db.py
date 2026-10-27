import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price INTEGER,
    image TEXT,
    category TEXT
)
''')

# Clear old data
cursor.execute("DELETE FROM products")

# 👟 Shoes
cursor.execute("INSERT INTO products VALUES (NULL,'Nike Shoes',2999,'https://images.unsplash.com/photo-1542291026-7eec264c27ff','shoes')")
cursor.execute("INSERT INTO products VALUES (NULL,'Adidas Shoes',2499,'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77','shoes')")
cursor.execute("INSERT INTO products VALUES (NULL,'Puma Shoes',1999,'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519','shoes')")

# 👗 Dresses
cursor.execute("INSERT INTO products VALUES (NULL,'Red Dress',1499,'https://images.unsplash.com/photo-1520975916090-3105956dac38','dress')")
cursor.execute("INSERT INTO products VALUES (NULL,'Black Dress',1999,'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446','dress')")
cursor.execute("INSERT INTO products VALUES (NULL,'Floral Dress',1299,'https://images.unsplash.com/photo-1496747611176-843222e1e57c','dress')")

conn.commit()
conn.close()

print("Database updated with shoes + dresses!")