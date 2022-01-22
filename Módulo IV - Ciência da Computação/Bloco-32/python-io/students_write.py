students_and_notes = open("my_students.txt", mode="w")

students = [
    "Marcos ", "10\n",
    "Felipe ", "4\n",
    "José ", "6\n",
    "Ana ", "10\n",
    "Maria ", "9\n",
    "Miguel ", "5\n"
]

students_and_notes.writelines(students)

students_and_notes.close()
