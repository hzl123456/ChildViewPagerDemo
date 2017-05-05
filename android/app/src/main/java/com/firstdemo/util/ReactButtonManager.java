package com.firstdemo.util;

import android.support.annotation.Nullable;
import android.widget.Button;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * 作者：请叫我百米冲刺 on 2017/4/17 下午3:39
 * 邮箱：mail@hezhilin.cc
 */

public class ReactButtonManager extends SimpleViewManager<Button> {

    private static final String MANAGER_NAME = "ReactButton";

    @Override
    public String getName() {
        return MANAGER_NAME;
    }

    @Override
    protected Button createViewInstance(ThemedReactContext reactContext) {
        return new Button(reactContext);
    }

    @ReactProp(name = "text")
    public void setText(Button button, @Nullable String text) {
        button.setText(text);
    }
}
