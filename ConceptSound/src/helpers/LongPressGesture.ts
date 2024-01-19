import {createGesture, Gesture} from "@ionic/vue";
import {impact} from "@/utils/Impact";

export class LongPressGesture {
    private gesture: Gesture;
    private pressStartTime: number = 0;
    private isPressed: boolean = false;
    private readonly LONG_PRESS_THRESHOLD: number = 1000;

    public constructor(target: any, onShortPress, onLongPress) {
        this.gesture = createGesture({
            el: target,
            threshold: 0,
            onStart: this.getOnStartFunction(),
            onEnd: this.getOnEndFunction(onShortPress, onLongPress),
            gestureName: "long-press",
        });
        this.gesture.enable();
    }

    private getOnStartFunction() {
        return () => {
            this.isPressed = true;
            this.pressStartTime = Date.now();
            setTimeout(async () => {
                if (this.isPressed) {
                    impact();
                }
            }, this.LONG_PRESS_THRESHOLD);
        }
    }

    private getOnEndFunction(onShortPress: Function, onLongPress: Function) {
        return () => {
            if (Date.now() - this.pressStartTime < this.LONG_PRESS_THRESHOLD) {
                onShortPress();
            } else {
                onLongPress();
            }
            this.isPressed = false;
        }
    }
}


