import { autoRefresh } from "./main";

export async function initialTime() {
    //切换页面的按钮在外部，而不是在iframe内
    if (
        location.href.includes(".sflep.com/student/StudyCourse.aspx?") ||
        location.href.includes(".sflep.com/Course/TryCourse.aspx?")
    ) {
        autoRefresh();
    }
}
