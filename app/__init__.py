from flask import Flask

# http://flask.pocoo.org/docs/0.10/patterns/appfactories/


def create_app(config_filename):
    app = Flask(__name__, static_folder='templates/static')
    app.config.from_object(config_filename)   

   
    from flask import render_template, send_from_directory
    import os

  

    @app.route('/<path:filename>')
    def file(filename):
        return send_from_directory(os.path.join(app.root_path, 'templates'), filename)

    @app.route('/')
    def index():
        return render_template('index.html')

   
    # Blueprints
    from app.headers.views import headers
    app.register_blueprint(headers, url_prefix='/api/v1/headers')

    return app
