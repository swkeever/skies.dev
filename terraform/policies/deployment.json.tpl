{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "StaticSiteDeployment",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject",
                "cloudfront:CreateInvalidation"
            ],
            "Resource": [
                "arn:aws:cloudfront::${account_id}:distribution/${cf_distribution_id}",
                "arn:aws:s3:::${s3_arn}",
                "arn:aws:s3:::${s3_arn}/*"
            ]
        }
    ]
}