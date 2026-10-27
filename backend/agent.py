import sqlite3

def process_query(user_input):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    query = user_input.lower()

    if "shoe" in query or "buy" in query:
        cursor.execute("SELECT name, price, image FROM products WHERE category='shoes'")

    elif "dress" in query:
        cursor.execute("SELECT name, price, image FROM products WHERE category='dress'")

    else:
        conn.close()
        return []

    products = cursor.fetchall()
    conn.close()

    return products