dissaproved_students = []

with open("my_students.txt") as students_file:
    for line in students_file:
        student_grade = line
        print(student_grade)
        student_grade = student_grade.split()
        print(student_grade)
        if int(student_grade[1]) < 6:
            dissaproved_students.append(student_grade[0] + "\n")

with open("dissaproved_students.txt", mode="w") as dissaproved_students_file:
    print(dissaproved_students)
    dissaproved_students_file.writelines(dissaproved_students)
