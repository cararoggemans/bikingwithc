import React from 'react';

function Quote() {
  return (
    <section className="quote">
        <div className="quote__background {blacktext}"></div>
            <div className="container">
                <div className="offset-md-1 col-md-10">
                    <blockquote>The only way to do great work <br></br>
                    is to love what you do.</blockquote>
                </div>
            </div>
    </section>
  );
}

export default Quote;
