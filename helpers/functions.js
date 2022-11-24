export function getLessonTime(lessonNumber, type = "standard") {
    const formatTime = (date) => date.toLocaleString("ru", {
        hour: "numeric",
        minute: "numeric"
    });
    const getStartAndEnd = (time) => {
        const endTime = new Date(time)
        endTime.setMinutes(endTime.getMinutes() + 40)
        return formatTime(time) + '-' + formatTime(endTime)
    }
    if (lessonNumber < 1 || lessonNumber > 8) throw new Error('ошибка номера урока')
    const breaks = [10, 20, 20, 20, 10, 10, 10, 10]
    let res = new Date(0, 0, 0, 8, 0, 0)
    if (lessonNumber === 1) return getStartAndEnd(res);
    res.setMinutes(res.getMinutes() + lessonNumber * 40 + breaks[lessonNumber - 2]);
    return getStartAndEnd(res);
}

