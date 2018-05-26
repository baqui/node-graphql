export default class Course {
  constructor({ connector }) {
    this.db = connector.collection('Courses');
  }

  getCourses = topic =>
    topic ? this.db.find({}).toArray() : this.db.find({}).toArray();

  getById = id => this.db.find({ id }).toArray();

  updateCourse = ({ id, topic }) => {
    const course = this.db.allCourses.filter(c => c.id === id)[0];
    course.topic = topic;
    return course;
  };
}
