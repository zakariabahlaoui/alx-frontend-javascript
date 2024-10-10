/* eslint-disable @typescript-eslint/no-namespace */
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC)
        return `Available Teacher: ${this.teacher.firstName}`;
      return 'No available teacher';
    }
  }
}
