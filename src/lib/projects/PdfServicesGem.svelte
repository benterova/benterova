<div class="columns">
    <div class="column">
        <h1 class="title">Gem: adobe_pdfservices_ruby</h1>
        <p>
            A Ruby gem for interacting with the Adobe PDF Services API. I
            originally forked the gem from <a
                href="https://github.com/arpc/pdfservices-ruby-sdk"
                target="_blank"
                rel="noopener noreferrer">arpc/pdfservices-ruby-sdk</a
            > and ended up rewriting most of the entire gem to be more Ruby-like
            and to better fit the Adobe PDF Services API.
        </p>
        <br />
        <p>
            I ended up delving into this as I needed a reliable way to extract
            the contents of a PDF so that I can re-construct it's contents as
            HTML. I initially thought of implementing this myself, but after
            some research came across the Adobe PDF Services API. Since their
            free tier allows for 500 PDFs to be processed per month, I decided
            to give it a try.
        </p>
        <br />
        <p>
            The reason I wanted to re-write it is the gem I forked from had a
            lot of repeated code, and had a usage pattern I viewed as
            cumbersome. I took inspiration from other API implementations I've
            used/worked on, such as the <a
                href="https://github.com/CQCenter/zoom_rb"
                target="_blank"
                rel="noopener noreferrer">Zoom Ruby API gem</a
            >, which used a pattern of initializing a client with an API key and
            secret, and then calling methods on the client to interact with the
            API.
        </p>
        <br />
        <p>
            I released the gem on RubyGems.org, as I thought it might be useful
            to others. I also wanted to get some experience with releasing a gem
            to RubyGems.org, as I've never done that before.
        </p>
        <a
            href="https://github.com/benterova/adobe-pdfservices-ruby"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 button">View on GitHub</a
        >
        <a
            href="https://rubygems.org/gems/adobe_pdfservices_ruby"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 button">View on RubyGems.org</a
        >
    </div>
    <div class="is-divider-vertical" />
    <div class="column is-one-third">
        <img src="/img/adobe-logo-white.png" />
    </div>
</div>
