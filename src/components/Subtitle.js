import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const Subtitle = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={60}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">const</span>{" "}
        <span className="text-orange-400">sjunka</span>:{" "}
        <span className="text-orange-400">Box</span>&lt;
        <span className="text-green-400">Treats</span>&gt;{" "}
        <span className="text-blue-600">=</span> [
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Arquitech</span>,{" "}
        <span className="text-red-500">Developer</span>,{" "}
        <span className="text-red-500">System Designer</span>,{" "}
        <span className="text-red-500">Data Analyst</span>,{" "}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Tester</span>,{" "}
        <span className="text-red-500">Seeker</span>, ...
        <span className="text-red-500">mentor</span>,
      </div>
      <div>];</div>
    </code>
  </Typist>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;
