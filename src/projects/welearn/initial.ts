// 在此处注册(直接调用)各个插件中，app初始化时要执行的函数
import { initialExam } from "./exam/initial";
import { initialExercise } from "./exercise/initial";
import { initialTime } from "./time/initial";

import { WELearnAPI } from "@/src/api/welearn";
export async function initialWELearn() {
    WELearnAPI.checkVersion();
    initialExam();
    initialExercise();
    initialTime();
}

