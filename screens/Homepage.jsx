import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

export default function MyComponent(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b87cbfb99836184e370338dc606340d3b168af57a9f0466747c695d73d94ff0?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
              }}
              style={styles.image1}
            />
            <View style={styles.view5}>
              <Image
                resizeMode="contain"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/478bc5f499b570ac095b560c03a40dce183db7d6d31465bfae15cb5709b8da5d?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
                }}
                style={styles.image2}
              />
              <View style={styles.view6}>
                <View style={styles.view7}>
                  <Text>FitBot</Text>
                </View>
                <View style={styles.view8}>
                  <View style={styles.view9} />
                  <View style={styles.view10}>
                    <Text>Always active</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c849d77a1ccd393e07c322292ec79573a65373c684f7a634a48f0f38e2e147d?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
            }}
            style={styles.image3}
          />
        </View>
        <View style={styles.view11}>
          <Text>Wed 8:21 AM</Text>
        </View>
        <View style={styles.view12}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/44b5aecb5fcdd2d10b0f59b12db9959e62d86ed01695f880fcc27ec4ad257859?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
            }}
            style={styles.image4}
          />
          <View style={styles.view13}>
            <Text>
              Hello, I’m FitBot! 👋 I’m your personal sport assistant. How can I
              help you?
            </Text>
          </View>
        </View>
        <View style={styles.view14}>
          <Text>Book me a visit in a gym</Text>
        </View>
        <View style={styles.view15}>
          <Text>Show me other sports facilities around</Text>
        </View>
        <View style={styles.view16}>
          <Text>Show me other options</Text>
        </View>
      </View>
      <View style={styles.view17}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8eebc99540668ebfdd61501e7c0093eb749ad321f44906a587529f0abd8f99a3?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
          }}
          style={styles.image5}
        />
        <View style={styles.view18}>
          <Text>Ok, how about these?</Text>
        </View>
      </View>
      <View style={styles.view19}>
        <View style={styles.view20}>
          <Text>BodyWorks on Nadwiślańska 12 street</Text>
        </View>
        <View style={styles.view21}>
          <View style={styles.view22}>
            <Text>250 meters</Text>
          </View>
          <View style={styles.view23}>
            <Text>30 zł/one entrance all day</Text>
          </View>
        </View>
        <View style={styles.view24}>
          <View style={styles.view25}>
            <View style={styles.view26}>
              <Text>Gym️</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d21f674b0909a74c9d54cfe0b4e166c40ed2933faefaef0f5f82a3e3b58c251d?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
              }}
              style={styles.image6}
            />
          </View>
          <View style={styles.view27}>
            <View style={styles.view28}>
              <Text>SPA</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0493d7dc1369475503aac802bfbcbc22054bda749662e4391d6cf13e02e6452f?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
              }}
              style={styles.image7}
            />
          </View>
          <View style={styles.view29}>
            <View style={styles.view30}>
              <Text>Pool</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5978d01ee7625ef07d04bc945b44d369ec0bcb0d5fe98b1180bbab8ef250a806?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
              }}
              style={styles.image8}
            />
          </View>
        </View>
      </View>
      <View style={styles.view31}>
        <View style={styles.view32}>
          <View style={styles.view33}>
            <View style={styles.view34}>
              <Text>Type a message...</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/add07716d875b94f56725a3c98e284af10b82732df854f919061b1fd66289fa9?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
              }}
              style={styles.image9}
            />
          </View>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d6b2693ef575292d854ef6fedff242d66bb4653843d411fed71576dc00c128c?apiKey=7ebe2ed4d1174127891f9c52b175f766&",
            }}
            style={styles.image10}
          />
        </View>
        <View style={styles.view35} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    paddingTop: 50,
    flexDirection: "column",
    alignItems: "stretch",
    margin: "0 auto",
  },
  view2: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    flexDirection: "column",
    padding: "0 24px",
  },
  view3: {
    justifyContent: "space-between",
    alignItems: "stretch",
    alignSelf: "stretch",
    display: "flex",
    width: "100%",
    gap: 20,
  },
  view4: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
  },
  image1: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 44,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view5: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
  },
  image2: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 44,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view6: {
    alignItems: "stretch",
    alignSelf: "center",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    margin: "auto 0",
  },
  view7: {
    color: "#202325",
    font: "700 14px/143% DM Sans, sans-serif ",
  },
  view8: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    gap: 4,
  },
  view9: {
    borderRadius: "50%",
    display: "flex",
    width: 8,
    flexShrink: 0,
    height: 8,
    flexDirection: "column",
    margin: "auto 0",
  },
  view10: {
    color: "#72777A",
    alignSelf: "stretch",
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "500 12px/133% DM Sans, sans-serif ",
  },
  image3: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 44,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view11: {
    color: "#72777A",
    alignSelf: "center",
    marginTop: 24,
    whiteSpace: "nowrap",
    font: "500 12px/133% DM Sans, sans-serif ",
  },
  view12: {
    alignItems: "start",
    alignSelf: "stretch",
    display: "flex",
    marginTop: 8,
    justifyContent: "space-between",
    gap: 8,
  },
  image4: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 32,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view13: {
    color: "#303437",
    alignItems: "stretch",
    borderRadius: "0px 24px 24px 24px",
    backgroundColor: "#F2F4F5",
    alignSelf: "stretch",
    flexGrow: "1",
    justifyContent: "center",
    padding: 16,
    font: "400 16px/24px DM Sans, sans-serif ",
  },
  view14: {
    color: "#006BE5",
    whiteSpace: "nowrap",
    alignItems: "stretch",
    borderRadius: 24,
    backgroundColor: "#F2F8FF",
    alignSelf: "end",
    marginTop: 16,
    justifyContent: "center",
    padding: "10px 16px",
    font: "500 16px/150% DM Sans, sans-serif ",
  },
  view15: {
    color: "#006BE5",
    whiteSpace: "nowrap",
    alignItems: "stretch",
    borderRadius: 24,
    backgroundColor: "#F2F8FF",
    alignSelf: "stretch",
    marginTop: 16,
    justifyContent: "center",
    padding: "10px 16px",
    font: "500 16px/150% DM Sans, sans-serif ",
  },
  view16: {
    color: "#FFF",
    textAlign: "center",
    whiteSpace: "nowrap",
    alignItems: "stretch",
    borderRadius: "24px 24px 0px 24px",
    backgroundColor: "#0070F0",
    alignSelf: "end",
    marginTop: 32,
    justifyContent: "center",
    padding: 16,
    font: "400 16px/150% DM Sans, sans-serif ",
  },
  view17: {
    alignItems: "start",
    alignSelf: "center",
    display: "flex",
    marginTop: 32,
    gap: 8,
  },
  image5: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 32,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view18: {
    color: "#303437",
    whiteSpace: "nowrap",
    alignItems: "stretch",
    borderRadius: "0px 24px 24px 24px",
    backgroundColor: "#F2F4F5",
    alignSelf: "stretch",
    flexGrow: "1",
    justifyContent: "center",
    padding: 16,
    font: "400 16px/150% DM Sans, sans-serif ",
  },
  view19: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 24,
    backgroundColor: "#F2F8FF",
    alignSelf: "center",
    display: "flex",
    marginTop: 16,
    width: "100%",
    maxWidth: 316,
    flexDirection: "column",
    padding: 16,
  },
  view20: {
    color: "#006BE5",
    textAlign: "right",
    whiteSpace: "nowrap",
    font: "500 16px/150% DM Sans, sans-serif ",
  },
  view21: {
    justifyContent: "flex-end",
    alignItems: "stretch",
    alignSelf: "start",
    display: "flex",
    gap: 20,
    margin: "6px 0 0 15px",
  },
  view22: {
    color: "#303437",
    whiteSpace: "nowrap",
    font: "500 14px/143% DM Sans, sans-serif ",
  },
  view23: {
    color: "#303437",
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "500 14px/143% DM Sans, sans-serif ",
  },
  view24: {
    alignItems: "stretch",
    alignSelf: "end",
    display: "flex",
    marginTop: 12,
    gap: 8,
  },
  view25: {
    alignItems: "stretch",
    borderRadius: 16,
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "space-between",
    gap: 6,
    padding: "6px 12px",
  },
  view26: {
    color: "#72777A",
    font: "500 14px/143% DM Sans, sans-serif ",
  },
  image6: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 20,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view27: {
    alignItems: "stretch",
    borderRadius: 16,
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "space-between",
    gap: 6,
    padding: "6px 12px",
  },
  view28: {
    color: "#72777A",
    font: "500 14px/143% DM Sans, sans-serif ",
  },
  image7: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 20,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view29: {
    alignItems: "stretch",
    borderRadius: 16,
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "space-between",
    gap: 6,
    padding: "6px 12px",
  },
  view30: {
    color: "#72777A",
    font: "500 14px/143% DM Sans, sans-serif ",
  },
  image8: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 20,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view31: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: "0px 0px 0px 48px",
    backgroundColor: "#FFF",
    display: "flex",
    marginTop: 10,
    width: "100%",
    flexDirection: "column",
    padding: "32px 24px 8px",
  },
  view32: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
  },
  view33: {
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 48,
    border: "1.5px solid #979C9E",
    backgroundColor: "#FFF",
    display: "flex",
    gap: 20,
    padding: "10px 20px",
  },
  view34: {
    color: "#72777A",
    font: "400 16px/150% DM Sans, sans-serif ",
  },
  image9: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 24,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  image10: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 44,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view35: {
    borderRadius: 100,
    backgroundColor:
      "rgba(9.000000413507223, 10.000000353902578, 10.000000353902578, 1)",
    alignSelf: "center",
    display: "flex",
    marginTop: 19,
    width: 148,
    flexShrink: 0,
    height: 5,
    flexDirection: "column",
  },
});


