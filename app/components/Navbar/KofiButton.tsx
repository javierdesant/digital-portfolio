import React from "react";

const KofiButton: React.FC = () => {
  return (
    <a
      className="btn min-w-min rounded-xl px-0"
      href="https://ko-fi.com/javierdesant"
    >
      <img
        className="h-full"
        src="/support_me_on_kofi_red.png"
        alt="support me on ko-fi"
      />
    </a>
  );
};

export default KofiButton;
