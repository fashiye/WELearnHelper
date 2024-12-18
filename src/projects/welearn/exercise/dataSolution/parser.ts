import logger from "@/src/utils/logger";
import { Answer } from "../main";

export function parseDataSolution() {
    let realAnswers = [];

    let answers = document.querySelectorAll("[data-solution]");
    logger.debug(answers);
    let index = 1;
    for (const element of answers) {
        const answer = parseAnswer(element as HTMLElement) as Answer;
        if (answer) {
            answer.index = index;
            logger.debug(answer);
            realAnswers.push(answer);
        }
        index++;
    }
    return realAnswers;
}

function parseAnswer(element: HTMLElement) {
    let answerText = element.getAttribute("data-solution");
    let answerType = "";
    if (answerText) {
        //填空题
        answerType = "blank";
    } else {
        //选择题
        answerType = "choice";  
        try {
            let Nodechild = element.firstElementChild!;
            let NodeSibling = element.nextElementSibling;
            if (Nodechild) {
                answerText = Nodechild.textContent;
            } else if (NodeSibling) {
                // 适配领航大学英语中部分填空题的答案位置(被相邻节点包含)
                if (NodeSibling.hasChildNodes()) {
                    NodeSibling.childNodes.forEach(node => answerText += node.textContent?.trim() + " " || "")
                } else {
                    answerText = NodeSibling.textContent?.trim() || answerText
                }
                answerType = "blank";
            } else {
                answerText = element.textContent;
            }
        } catch (error) {
            answerText = element.textContent;
        }
    }

    return {
        text: answerText,
        type: answerType,
        element: element,
    };
}
