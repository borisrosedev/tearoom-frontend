variable "tearoom_vpc_id" {
  default = "vpc-04859a84539547d8e"
}


variable "tearoom_frontend_img" {
  default = "boralexdev/tearoom-frontend:latest"
}

variable "tearoom_public_subnets" {
  type    = list(string)
  default = [
    "subnet-0cf9d9b28ab103df3",
    "subnet-05166000e594bc044"
  ]
}


