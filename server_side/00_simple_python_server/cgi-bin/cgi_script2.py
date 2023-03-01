#!python

import cgi

print("Content-type: text/html \n")

print("""
<html>
<head>
  <title>CGI script 2</title>
</head>
<body>
  <h3>Simple input and output with forms</h3>
""")

#do some Python stuff
form_data = cgi.FieldStorage()
input_message = form_data.getvalue("input_message", "(no message entered)")

print("""
  <p>Previous message: %s</p>
  <p>form</p>
  <form method="post" action="cgi_script2.py">
    <p>message: <input type="text" name="input_message" /></p>
  </form>
</body>
</html>
""" % input_message)