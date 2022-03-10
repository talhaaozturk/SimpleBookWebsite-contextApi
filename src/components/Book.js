import React from "react";
import "./Book.css";
import { ThemeContext } from "../context/ThemeContext";

class Book extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextThemee) => {
          const { isDarkTheme, dark, light } = contextThemee;

          const theme = isDarkTheme ? dark : light;
          return (
            <div className="col-lg-4 col-sm-6 mb-3">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div
                    className="portfolio-hover"
                    style={{ background: theme.hover }}
                  >
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                    src={this.props.book.imageURL}
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    {this.props.book.title}
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    {this.props.book.author}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Book;
