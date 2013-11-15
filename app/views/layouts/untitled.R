#Gather input data from URL –the order you list urls matters
wind_1<-read.delim("http://www.itl.nist.gov/div898/winds/data/nondirectional/datasets/cheyenne_wy.prn",  sep="", col.names=c("direction","fastest,mph", "gust,mph","gust,m/s"), skip = 4, header=F)
wind_2<-read.delim("http://www.itl.nist.gov/div898/winds/data/nondirectional/datasets/cleveland_oh.prn",  sep="", col.names=c("direction","fastest,mph", "gust,mph","gust,m/s"), skip = 4, header=F)
wind_3<-read.delim("http://www.itl.nist.gov/div898/winds/data/nondirectional/datasets/dallas_tx.prn",  sep="", col.names=c("direction","fastest,mph", "gust,mph","gust,m/s"), skip = 4, header=F)
wind_4<-read.delim("http://www.itl.nist.gov/div898/winds/data/nondirectional/datasets/great_falls_mt.prn",  sep="", col.names=c("direction","fastest,mph", "gust,mph","gust,m/s"), skip = 4, header=F)
wind_5<-read.delim("http://www.itl.nist.gov/div898/winds/data/nondirectional/datasets/helena_mt.prn",  sep="", col.names=c("direction","fastest,mph", "gust,mph","gust,m/s"), skip = 4, header=F)
wind_6<-read.delim("http://www.itl.nist.gov/div898/winds/data/nondirectional/datasets/new_york_ny.prn",  sep="", col.names=c("direction","fastest,mph", "gust,mph","gust,m/s"), skip = 4, header=F)
wind_7<-read.delim("http://www.itl.nist.gov/div898/winds/data/nondirectional/datasets/pueblo_co.prn",  sep="", col.names=c("direction","fastest,mph", "gust,mph","gust,m/s"), skip = 4, header=F)
wind_8<-read.delim("http://www.itl.nist.gov/div898/winds/data/nondirectional/datasets/salt_lake_city_ut.prn",  sep="", col.names=c("direction","fastest,mph", "gust,mph","gust,m/s"), skip = 4, header=F)

#Create the histograms and fill in the first 6 columns of the table in part 3
alpha=0.05
mu=55
variance=38
par(mfrow=c(4,2))

for(i in 1:8){
  r<-paste("wind_",i,sep="")
  n<-c("Cheyenne", "Cleveland", "Dallas", "Great Falls", "Helena", "New York City", "Pueblo", "Salt Lake City")
  title<-paste(n[i],"Sustained Wind Speeds (mph)")
  hist(get(r)$fastest.mph, xlab="Wind Speeds (mph)", main=title, xlim=c(30,80), freq=F)
  lines(dnorm(1:1000,mean(get(r)$fastest.mph),sd(get(r)$fastest.mph)),lwd=2,lty=2)
  s<-summary(get(r)$fastest.mph)
  print(s)
  sd<-sd(get(r)$fastest.mph)
  print(sd)
  t<-t.test(get(r)$fastest.mph, alternative = c("two.sided"),mu=mu, conf.level = (1-alpha))
  print(t)
}

#chi-squared tests on each variance – fill in the last column of the table in part 3
for (i in 1:8) {
  r<-paste("wind_",i,sep="")
  var<-(sd(get(r)$fastest.mph))^2
  df<-(length(get(r)$fastest.mph)-1)
  chisqlwr<-qchisq(alpha/2, df, lower.tail = FALSE)
  chisqupr<-qchisq(alpha/2, df, lower.tail = TRUE) #hey prolly worng right here
  lcl<- df*var/chisqlwr
  ucl<- df*var/chisqupr
  print(paste("One Sample Chi-squared test df=", df, "95 percent confidence interval:", lcl, ucl))
}

#code for parts 4-7 – use the values generated in the previous part to fill in the means and stddev vectors

means<-c(60.2,52.74,49.16,58.34,54.04,55.35,62.16,50.41)
m<-t.test(mu, alternative = c("two.sided"),mu=mu, conf.level = (1-alpha))
print(m)

stddev<-c(5.887583,6.558976,6.426304,7.541955,6.529668,7.30274,7.038232)
vart<-t.test(stddev^2, alternative = c("two.sided"),mu=variance, conf.level = (1-alpha))
print(vart)