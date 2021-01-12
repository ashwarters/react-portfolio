import React from 'react';

function Footer() {
    return (
        <footer>
        <div class="card text-center pt-5">
            <div style= {{textAlign: 'center'}} class="card-body">
                <p class="card-text">Find me on:</p>
                <a href="https://www.linkedin.com/in/ashley-warters-a54445176/" class="btn btn-primary">LinkedIn</a>
                <a href="https://github.com/ashwarters" class="btn btn-info">GitHub</a>
                <a href="https://twitter.com/splashinash" class="btn btn-info">Twitter</a>

            </div>
            <div style= {{textAlign: 'center'}} class="card-footer text-muted">
                Created by Ashley Warters
            </div>
        </div>
    </footer>
    )
}

export default Footer;