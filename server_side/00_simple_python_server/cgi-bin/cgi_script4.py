#!python

import cgi

def update_log(input_message):
    past_messages = ""
    try:
        with open("message_log.txt", "r") as in_file:
            in_file_data = in_file.read()
            past_messages = in_file_data.replace("\n", "<br>")
    except FileNotFoundError:
        with open("message_log.txt", "w") as new_file:
            new_file.write("")

    if input_message != "(no message entered)":
        past_messages = input_message + "<br>" + past_messages

    # fails on bad character data (even just emojis from UTF8-mb4), change to w+ or append mode... look it up!
    with open("message_log.txt", "w") as out_file:
        out_file_data = past_messages.replace("<br>", "\n")
        out_file.write(out_file_data)

    return past_messages

print("Content-type: text/html \n\n")

print("""
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>CGI script 4</title>
  <link rel="stylesheet" type="text/css" href="../styles/reset.css">
  <link rel="stylesheet" type="text/css" href="../styles/main_style.css">
</head>
<body>
  <h3>Simple input and output with forms and more complex with past messgaes</h3>
  <h6><a href="../more_html.html">Return to main page</a></h6>
""")

#do some Python stuff
form_data = cgi.FieldStorage()
input_message = form_data.getvalue("input_message", "(no message entered)")
past_messages = update_log(input_message)

print("""
  <p>Most recent message: {0}</p>
  <p>form</p>
  <form method="post" action="cgi_script4.py">
    <p>message: <input type="text" name="input_message" autofocus/></p>
    <p>Past messages: {1}</p>
    <input type="submit" value="submit">
  </form>
</body>
</html>
""".format(input_message, past_messages))