import * as React from "react";
import { wrapFieldsWithMeta } from "tinacms";

export const colorOptions = [
  "black",
  "black_light",
  "black_lightest",
]

export const ColorPickerInput = wrapFieldsWithMeta(({ input }) => {
  const inputClasses = {
    black: "bg-sn-black",
    black_light: "bg-sn-black-light",
    black_lightest: "bg-sn-black-lightest",
  };

  return (
    <>
      <input type="text" id={input.name} className="hidden" {...input} />
      <div className="flex gap-2 flex-wrap">
        {colorOptions.map((color) => {
          return (
            <button
              key={color}
              className={`w-9 h-9 rounded-full shadow border ${inputClasses[color]
} ${input.value === inputClasses[color]
? "ring-[3px] ring-offset-2 ring-blue-400"
: ""
}`}
              onClick={() => {
                input.onChange(inputClasses[color]);
              }}
            ></button>
          );
        })}
      </div>
    </>
  );
});
