resource "aws_acm_certificate" "cert" {
  domain_name = local.primary_domain_name
  subject_alternative_names = [
    local.alternate_domain_name]
  validation_method = "DNS"
}

resource "aws_acm_certificate_validation" "cert" {
  certificate_arn = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
  for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
    name = dvo.resource_record_name
    record = dvo.resource_record_value
    type = dvo.resource_record_type
  }
  }

  allow_overwrite = true
  name = each.value.name
  records = [
    each.value.record]
  ttl = 60
  type = each.value.type
  zone_id = aws_route53_zone.zone.id
}
