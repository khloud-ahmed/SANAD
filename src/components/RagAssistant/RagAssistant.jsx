import { useState } from "react";
import "./RagAssistant.css";

function RagAssistant() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleAsk(e) {
    e.preventDefault();
    if (!question.trim()) return;
    setSubmitted(true);
    // TODO: replace this block with a real call, e.g.
    // const res = await fetch("/api/rag/ask", { method: "POST", body: JSON.stringify({ question }) });
  }

  return (
    <div className="rag-assistant-box">
      <div className="rag-header">
        <i className="fa-solid fa-comment-medical"></i>
        <h3>Ask about this data</h3>
      </div>
      <p className="rag-subtitle">
        e.g. "Which providers have the most cancellations this week?"
      </p>

      <form className="rag-form" onSubmit={handleAsk}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question related to this section..."
          className="rag-input"
        />
        <button type="submit" className="rag-submit-btn">
          Ask
        </button>
      </form>

      {submitted && (
        <div className="rag-answer-placeholder">
          <p className="rag-answer-text">
            <strong>Placeholder response —</strong> once connected to the RAG
            service, a grounded answer will appear here with its source
            reference, and a chart when the question involves numbers.
          </p>
          <div className="rag-chart-placeholder">
            <i className="fa-solid fa-chart-simple"></i> Chart will render here
          </div>
        </div>
      )}
    </div>
  );
}

export default RagAssistant;
