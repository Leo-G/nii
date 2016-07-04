from marshmallow_jsonapi import Schema, fields
from marshmallow import validate


class HeadersSchema(Schema):

    not_blank = validate.Length(min=1, error='Field cannot be blank')
    # add validate=not_blank in required fields
    id = fields.Integer(dump_only=True)

    headers = fields.String(validate=not_blank)

    # self links
    def get_top_level_links(self, data, many):
        if many:
            self_link = "/headers/"
        else:
            self_link = "/headers/{}".format(data['id'])
        return {'self': self_link}

    class Meta:
        type_ = 'headers'
