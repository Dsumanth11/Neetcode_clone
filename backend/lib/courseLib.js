const courseModel=require('../models/courseModel.js');
module.exports.getAllCourses=async function(){
    return await courseModel.find({});
}

module.exports.CreateFirstCourse=async function(){
    const allCourses=await courseModel.find({});
    if(allCourses.length==0)
    {
        const firstCourseInput={
            "title":"bz DSA",
            "level":"easy"
        };
        const course=new courseModel(firstCourseInput);
        await course.save();
    }
}