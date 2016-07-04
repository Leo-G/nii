from flask import Blueprint, request, jsonify, make_response
from app.headers.models import HeadersSchema
from flask_restful import Api, Resource
from marshmallow import ValidationError
from pssh import ParallelSSHClient


headers = Blueprint('headers', __name__)
# http://marshmallow.readthedocs.org/en/latest/quickstart.html#declaring-schemas
# https://github.com/marshmallow-code/marshmallow-jsonapi
schema = HeadersSchema(strict=True)
api = Api(headers)


class EmailHeaders(Resource):
   
    def post(self):
        raw_dict = request.get_json(force=True)
        try:
            schema.validate(raw_dict)
            request_dict = raw_dict['data']['attributes']
            email_headers = request_dict['headers']                       
            from email.parser import HeaderParser
            parser = HeaderParser()
            parsed_header = parser.parsestr(email_headers)            
            data = {}
            data ['From'] = parsed_header['From']
            data ['To'] = parsed_header['To']
            data ['x-originating-ip'] = parsed_header['x-originating-ip']
            data ['Received'] = parsed_header['Received']        
            return data, 201
            

        except ValidationError as err:
            resp = jsonify({"error": err.messages})
            resp.status_code = 403
            return resp

class UserDetails(Resource):

    def post(self):
        raw_dict = request.get_json(force=True)
        try:
            schema.validate(raw_dict)
            request_dict = raw_dict['data']['attributes']
            ipaddress = request_dict['ipaddress']
            username = request_dict['username']
            password = request_dict['password']
            #s = pxssh.pxssh()           
            #s.login(ipaddress, username, password,port=2222,auto_prompt_reset=False)            
            hosts = [ipaddress]
            client = ParallelSSHClient(hosts, user=username, password=password, port=2222)
            output= client.run_command("grep ':0' /etc/passwd | grep '/bin/bash' |  awk -F: '{print $1}'")
            users = []
            for host in output:
                for user in output[host]['stdout']:
                     users.append(user)
            data = {'users': users}
            del output
            return data, 201
            

        except ValidationError as err:
            resp = jsonify({"error": err.messages})
            resp.status_code = 403
            return resp


api.add_resource(EmailHeaders, '.json')
api.add_resource(UserDetails, '/user.json')
