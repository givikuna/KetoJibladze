class Student:
    def __init__(self, id, lastName):
        self.id = id
        self.lastName = lastName
        self.creditsEarned = 0
        self.courseLoadCredits = 0
        self.status = 1

    def update_status(self):
        if self.creditsEarned < 30:
            self.status = 1
        elif 30 <= self.creditsEarned < 60:
            self.status = 2
        elif 60 <= self.creditsEarned < 90:
            self.status = 3
        elif 90 <= self.creditsEarned <= 120:
            self.status = 4

    def registerCourse(self, credits):
        if credits <= 0:
            print("Error: Credits must be positive.")
        elif self.courseLoadCredits + credits > 18:
            print("Error: Course load cannot exceed 18 credits.")
        else:
            self.courseLoadCredits += credits

    def withdraw(self, credits):
        if credits <= 0:
            print("Error: Credits must be positive.")
        else:
            self.courseLoadCredits = max(0, self.courseLoadCredits - credits)

    def passedCourse(self, credits):
        if credits <= 0:
            print("Error: Credits must be positive.")
        else:
            self.courseLoadCredits -= credits
            self.creditsEarned += credits
            self.update_status()

    def createEmail(self):
        return f"{self.lastName.lower()}{self.id}@rutgers.edu"


class Graduate_Student(Student):
    def __init__(self, id, lastName):
        super().__init__(id, lastName)
        self.status = 5

    def registerCourse(self, credits):
        if credits <= 0:
            print("Error: Credits must be positive.")
        elif self.courseLoadCredits + credits > 15:
            print("Error: Course load cannot exceed 15 credits for graduate students.")
        else:
            self.courseLoadCredits += credits


student1 = Student(101, "Johnson")

print("Email:", student1.createEmail())

student1.registerCourse(15)
print("Course Load Credits:", student1.courseLoadCredits)

student1.withdraw(5)
print("Course Load Credits after withdrawal:", student1.courseLoadCredits)

student1.passedCourse(10)
print("Credits Earned:", student1.creditsEarned)
print("Course Load Credits after passing:", student1.courseLoadCredits)
print("Student Status:", student1.status)

student1.registerCourse(20)

student1.withdraw(5)
print("Course Load Credits after invalid withdrawal:", student1.courseLoadCredits)

student1.passedCourse(3)

print("\nGraduate Student Test Cases\n")
grad_student1 = Graduate_Student(202, "Williams")

print("Email:", grad_student1.createEmail())

grad_student1.registerCourse(12)
print("Course Load Credits:", grad_student1.courseLoadCredits)

grad_student1.withdraw(3)
print("Course Load Credits after withdrawal:", grad_student1.courseLoadCredits)

grad_student1.passedCourse(9)
print("Credits Earned:", grad_student1.creditsEarned)
print("Course Load Credits after passing:", grad_student1.courseLoadCredits)
print("Graduate Student Status:", grad_student1.status)

grad_student1.registerCourse(16)

grad_student1.withdraw(5)
print("Course Load Credits after invalid withdrawal:", grad_student1.courseLoadCredits)

grad_student1.passedCourse(3)
