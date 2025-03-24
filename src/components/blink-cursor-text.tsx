interface BlinkingCursorTextProps {
  text: string;
}

export function BlinkingCursorText({ text }: BlinkingCursorTextProps) {
  return (
    <div className="text-3xl font-mono mb-4 border-b-2">
      {text}
      <div className="animate-blink inline-block">
        <span className="inline-block border-1 h-[22px] w-[2px] ml-1" />
      </div>
    </div>
  );
}
