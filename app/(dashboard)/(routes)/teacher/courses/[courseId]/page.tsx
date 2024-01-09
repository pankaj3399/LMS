const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  return (
    <div>
      <p>Course ID: {params.courseId}</p>
    </div>
  );
};

export default CourseIdPage;
