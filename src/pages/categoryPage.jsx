import React from "react";
import "./categoryPage.styles.scss";
import { connect } from "react-redux";
import ResultsCard from "../components/resultsCard/resultsCard.component";
import { Redirect } from "react-router-dom";

const CategoryPage = ({ results, status, error, category }) => {
  return category === null ? (
    <Redirect to="/" />
  ) : results === null ? (
    status ? (
      <h1>Loading</h1>
    ) : error ? (
      <h1>{error}</h1>
    ) : null
  ) : (
    <div className="category-page">
      <div className="category-page--container">
        <h1 className="category-page--title">{category}</h1>
        <div className="cards-container">
          {results.map((cur) => (
            <ResultsCard key={cur.id} result={cur} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results.results,
    status: state.results.status,
    error: state.results.error,
    category: state.results.category,
  };
};

export default connect(mapStateToProps)(CategoryPage);
